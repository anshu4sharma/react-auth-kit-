import { createRefresh } from "react-auth-kit";
import axios from "axios";
const refreshApi = createRefresh({
  interval: 1, // Refreshs the token in every 1 minutes
  refreshApiCallback: async ({
    // can be get all these details
    // authToken,
    // authTokenExpireAt,
    // refreshTokenExpiresAt,
    authUserState,
    refreshToken,
  }) => {
    console.log(authUserState,"authUserState");
    
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/v1/refresh",
        {
          token: refreshToken,
        }
      );
      console.log( data.access_token,"refreshed access_token");
      return {
        isSuccess: true,
        newAuthToken: data.access_token,
        newAuthTokenExpireIn: 1,
        newRefreshTokenExpiresIn: 10,
        newRefreshToken: data.refresh_token,
        newAuthUserState: {
            token:data.access_token
        },
      };
    } catch (error) {
      console.error(error,"sad");
      return {
        isSuccess: false,
      };
    }
  },
});

export default refreshApi;
