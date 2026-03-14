import { useState, type FC } from "react";

export interface Notification {
  id: string;
  stepTitle: string;
  stepIndex: number;
}

interface StickyNotificationProps {
  stepTitle: string;
  stepIndex: number;
  totalSteps: number;
  onDismiss: () => void;
  onGoNext: () => void;
}

interface NotificationPortalProps {
  notifications: Notification[];
  totalSteps: number;
  onDismiss: (id: string) => void;
  onGoNext: (stepIndex: number) => void;
}

const StickyNotification: FC<StickyNotificationProps> = ({
  stepTitle,
  stepIndex,
  totalSteps,
  onDismiss,
  onGoNext,
}) => {
  const [exiting, setExiting] = useState<boolean>(false);
  const hasNext = stepIndex < totalSteps - 1;

  const dismiss = (): void => {
    setExiting(true);
    setTimeout(onDismiss, 260);
  };

  return (
    <div
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      className={`sticky-notification${exiting ? " exiting" : ""}`}
    >
      <div className="notif-body">
        <p className="notif-title">Step complete!</p>
        <p className="notif-text">
          <strong>{stepTitle}</strong> timer finished.
          {hasNext ? " Ready for the next step?" : " That's the last step!"}
        </p>
        <div className="notif-actions">
          <button className="notif-btn-dismiss" onClick={dismiss}>
            Dismiss
          </button>
          {hasNext && (
            <button
              className="notif-btn-next"
              onClick={() => {
                onGoNext();
                dismiss();
              }}
            >
              Next step →
            </button>
          )}
        </div>
      </div>

      <button
        className="notif-close"
        onClick={dismiss}
        aria-label="Close notification"
      >
        ×
      </button>
    </div>
  );
};

export const NotificationPortal: FC<NotificationPortalProps> = ({
  notifications,
  totalSteps,
  onDismiss,
  onGoNext,
}) => (
  <div
    className="sticky-notification-portal"
    aria-label="Step timer notifications"
  >
    {notifications.map((n) => (
      <StickyNotification
        key={n.id}
        stepTitle={n.stepTitle}
        stepIndex={n.stepIndex}
        totalSteps={totalSteps}
        onDismiss={() => onDismiss(n.id)}
        onGoNext={() => onGoNext(n.stepIndex + 1)}
      />
    ))}
  </div>
);
