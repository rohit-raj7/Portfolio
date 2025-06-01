

import React, { useEffect, useState } from "react";
import { database, ref, onValue, set, remove, get, child, increment, update } from "../firebase";
import { v4 as uuidv4 } from "uuid";

const LiveUserCount = () => {
  const [liveUsers, setLiveUsers] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    const sessionId = sessionStorage.getItem("sessionId") || uuidv4();
    sessionStorage.setItem("sessionId", sessionId);

    const sessionRef = ref(database, `sessions/${sessionId}`);
    set(sessionRef, { connectedAt: Date.now() });

    // Listen for session changes (live users)
    const sessionsRef = ref(database, "sessions");
    onValue(sessionsRef, (snapshot) => {
      const sessions = snapshot.val();
      setLiveUsers(sessions ? Object.keys(sessions).length : 0);
    });

    // Listen for total user count
    const totalRef = ref(database, "metrics/totalUsers");
    onValue(totalRef, (snapshot) => {
      const data = snapshot.val();
      if (data !== null) setTotalUsers(data);
    });

    // Only increment total users if not already counted
    if (!localStorage.getItem("alreadyCounted")) {
      update(ref(database, "metrics"), {
        totalUsers: increment(1),
      });
      localStorage.setItem("alreadyCounted", "true");
    }

    const handleUnload = () => {
      remove(sessionRef);
    };

    window.addEventListener("beforeunload", handleUnload);

    return () => {
      handleUnload();
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, []);

  return (
    <div className="flex flex-wrap gap-2 items-center justify-start my-4">
{/*       <div className="bg-[#111827] text-white px-6 py-3 rounded-lg border border-gray-500 shadow-md text-center text-base md:text-lg font-medium">
        🔴 Live: <strong className="text-green-400">{liveUsers}</strong>
      </div>
      <div className="bg-[#111827] text-white px-6 py-3 rounded-lg border border-gray-500 shadow-md text-center text-base md:text-lg font-medium">
        👥 Total Views : <strong className="text-blue-400">{totalUsers}</strong>
      </div> */}
    </div>
  );
};

export { LiveUserCount };
