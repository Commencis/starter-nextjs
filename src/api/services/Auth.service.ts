import { makeRequest } from '@/lib';

import { AuthLoginRequest } from '@/api/models/AuthLoginRequest';
import { AuthLoginResponse } from '@/api/models/AuthLoginResponse';

const ACCESS_TOKEN_KEY = 'accessToken';

class AuthService {
  private accessTokenKey = ACCESS_TOKEN_KEY;

  public async login(request: AuthLoginRequest): Promise<AuthLoginResponse> {
    try {
      const response = await makeRequest<AuthLoginResponse, AuthLoginRequest>({
        method: 'POST',
        path: '/auth/login',
        data: request,
        withAuthorization: false,
      });

      this.setAccessToken(response.accessToken);
      return response;
    } catch (error) {
      if (error instanceof Error && error.message) {
        throw new Error(`Login Failed: ${error.message}`);
      } else {
        throw new Error('Login Failed: Unknown error occurred');
      }
    }
  }

  public async logout(userId: string): Promise<AuthLoginResponse> {
    try {
      const response = await makeRequest<AuthLoginResponse, { userId: string }>(
        {
          method: 'POST',
          path: '/auth/logout',
          data: { userId },
        }
      );

      this.clearAccessToken();
      return response;
    } catch (error) {
      if (error instanceof Error && error.message) {
        throw new Error(`Logout Failed: ${error.message}`);
      } else {
        throw new Error('Logout Failed: Unknown error occurred');
      }
    }
  }

  private setAccessToken(token: string): void {
    localStorage.setItem(this.accessTokenKey, token);
  }

  private clearAccessToken(): void {
    localStorage.removeItem(this.accessTokenKey);
  }
}

export const authService = new AuthService();
