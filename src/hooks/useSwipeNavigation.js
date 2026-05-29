import { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ROUTES = [
  "/",
  "/about",
  "/mission",
  "/programs",
  "/testimonials",
  "/contact",
];

const MIN_SWIPE_PX = 60;

export function useSwipeNavigation(setDirection) {
  const navigate = useNavigate();
  const location = useLocation();
  const startX   = useRef(null);
  const startY   = useRef(null);

  useEffect(() => {
    const onTouchStart = (e) => {
      startX.current = e.touches[0].clientX;
      startY.current = e.touches[0].clientY;
    };

    const onTouchEnd = (e) => {
      if (startX.current === null) return;

      const dx = e.changedTouches[0].clientX - startX.current;
      const dy = e.changedTouches[0].clientY - startY.current;

      if (Math.abs(dy) > Math.abs(dx)) return;
      if (Math.abs(dx) < MIN_SWIPE_PX) return;

      const i = ROUTES.indexOf(location.pathname);
      if (i === -1) return;

      if (dx < 0 && ROUTES[i + 1]) {
        setDirection("forward");
        navigate(ROUTES[i + 1]);
      } else if (dx > 0 && ROUTES[i - 1]) {
        setDirection("backward");
        navigate(ROUTES[i - 1]);
      }

      startX.current = null;
      startY.current = null;
    };

    document.addEventListener("touchstart", onTouchStart, { passive: true });
    document.addEventListener("touchend",   onTouchEnd,   { passive: true });

    return () => {
      document.removeEventListener("touchstart", onTouchStart);
      document.removeEventListener("touchend",   onTouchEnd);
    };
  }, [location.pathname, navigate, setDirection]);
}