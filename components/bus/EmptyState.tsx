import Link from "next/link";

interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  actionText?: string;
  actionHref?: string;
  onAction?: () => void;
}

export default function EmptyState({
  icon,
  title,
  description,
  actionText,
  actionHref,
  onAction,
}: EmptyStateProps) {
  const defaultIcon = (
    <svg
      className="mx-auto h-12 w-12 text-gray-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );

  return (
    <div className="py-12 text-center">
      {icon || defaultIcon}
      <h3 className="mt-4 mb-2 text-lg font-medium text-gray-900">{title}</h3>
      {description && <p className="mb-6 text-gray-600">{description}</p>}
      {actionText &&
        (actionHref ? (
          <Link href={actionHref}>
            <button className="rounded-lg bg-blue-600 px-6 py-2 font-medium text-white transition-colors hover:bg-blue-700">
              {actionText}
            </button>
          </Link>
        ) : (
          <button
            onClick={onAction}
            className="rounded-lg bg-blue-600 px-6 py-2 font-medium text-white transition-colors hover:bg-blue-700"
          >
            {actionText}
          </button>
        ))}
    </div>
  );
}
