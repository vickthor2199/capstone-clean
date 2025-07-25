export function loginUser(email: string, password: string) {
  localStorage.setItem("user", JSON.stringify({ email, password }));
}

export function isLoggedIn(): boolean {
  return typeof window !== "undefined" && localStorage.getItem("user") !== null;
}

export function logoutUser() {
  localStorage.removeItem("user");
}

export function getUser() {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem("user");
    return data ? JSON.parse(data) : null;
  }
  return null;
}
