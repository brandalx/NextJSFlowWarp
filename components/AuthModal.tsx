"use client";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import {
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { Auth } from "@supabase/auth-ui-react";
const AuthModal = () => {
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  const { session } = useSessionContext();

  return (
    <Modal
      title="Welcome back"
      description="Login to your account"
      isOpen
      onChange={() => {}}
    >
      <Auth
        appearance={{
          theme: ThemeSupa,
        }}
        supabaseClient={supabaseClient}
      />
    </Modal>
  );
};

export default AuthModal;
