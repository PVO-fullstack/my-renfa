export const selectUser = (state) => state.auth.user;
// export const selectUserName = (state) => state.auth.user;
// export const selectAvatar = (state) => state.auth.user;
// export const selectPosition = (state) => state.auth.user;
export const selectToken = (state) => state.auth.token;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectIsRefresh = (state) => state.auth.isRefresh;
