import { createRefresh } from "react-auth-kit";
import axios from "axios";
const refreshApi = createRefresh({
  interval: 1, // Refreshs the token in every 1 minutes
  refreshApiCallback: async ({
    // can be get all these details
    // authToken,
    // authTokenExpireAt,
    // refreshTokenExpiresAt,
    // authUserState,
    refreshToken,
  }) => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/v1/refresh",
        {
          token: refreshToken,
        }
      );
      return {
        isSuccess: true,
        newAuthToken: data.token,
        newAuthTokenExpireIn: 1,
        newRefreshTokenExpiresIn: 10,
      };
    } catch (error) {
      console.error(error);
      return {
        isSuccess: false,
      };
    }
  },
});

export default refreshApi;
