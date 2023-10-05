"use client";

import { useForm } from "react-hook-form";
import useUploadModal from "@/hooks/useUploadModal";
import Modal from "./Modal";
const UploadModal = () => {
  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      author: "",
      title: "",
      song: null,
      image: null,
    },
  });
  const uploadModal = useUploadModal();
  const onChange = (open: boolean) => {
    if (!open) {
      reset();
      uploadModal.onClose();
    }
  };

  return (
    <Modal
      title="Add song"
      description="Upload an mp3 file"
      isOpen={uploadModal.isOpen}
      onChange={onChange}
    >
      Form
    </Modal>
  );
};

export default UploadModal;
