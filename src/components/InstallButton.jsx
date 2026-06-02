import {
  useEffect,
  useState
} from "react";

export default function InstallButton() {
  const [promptEvent,
    setPromptEvent] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setPromptEvent(e);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const installApp = async () => {
    if (!promptEvent) return;

    promptEvent.prompt();

    const result = await promptEvent.userChoice;

    if (result.outcome === "accepted") {
      console.log("App installed");
    }

    setPromptEvent(null);
  };

  if (!promptEvent) return null;

  return (
    <button onClick={installApp}>
      Install App
    </button>
  );
}