export const deleteTODO = (payload: string) => ({
  type: 'DELETE_TODO',
  payload: { id: payload },
});
