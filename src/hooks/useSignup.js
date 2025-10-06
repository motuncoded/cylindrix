import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";

const signupUser = async (userData) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/auth/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    },
  );

  if (!response.ok) {
    let errorMessage = "Failed to register user";
    try {
      const errorData = await response.json();
      errorMessage = errorData.message || errorMessage;
    } catch {
      const errorText = await response.text();
      errorMessage = errorText || errorMessage;
    }
    throw new Error(errorMessage);
  }

  return response.json();
};

const useSignup = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: signupUser,
    onSuccess: (data) => {
      console.log("Signup successful", data);
      navigate({ to: "/" });
    },
    onError: (error) => {
      console.error("Signup failed", error);
      return error.message || "Signup failed. Please try again.";
    },
  });
};

export default useSignup;
