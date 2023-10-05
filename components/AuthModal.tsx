"use client";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import {
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { Auth } from "@supabase/auth-ui-react";
import useAuthModal from "@/hooks/useAuthModal";
const AuthModal = () => {
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  const { session } = useSessionContext();
  const { onClose, isOpen } = useAuthModal();
  const onChange = (open: boolean) => {
    if (!isOpen) {
      onClose();
    }
  };
  return (
    <Modal
      title="Welcome back"
      description="Login to your account"
      isOpen={isOpen}
      onChange={() => {}}
    >
      <Auth
        providers={["facebook", "google", "linkedin", "twitter"]}
        magicLink
        theme="dark"
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: "#404040",
                brandAccent: "#22c55e",
              },
            },
          },
        }}
        supabaseClient={supabaseClient}
      />
    </Modal>
  );
};

export default AuthModal;
