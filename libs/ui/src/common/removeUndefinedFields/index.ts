export const removeUndefinedFields = <T>(
  obj: Record<string, T>
): Record<string, T> => {
  return Object.fromEntries(
    Object.entries(obj).filter(([_, value]) => value !== undefined)
  );
};
