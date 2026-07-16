/**
 * Formats a date string/Date for display in the admin dashboard.
 * Centralized so the format is consistent anywhere dates are shown.
 */
export function formatDate(date) {
  return new Date(date).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}
