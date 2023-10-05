"use client";

import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import useUploadModal from "@/hooks/useUploadModal";
import Modal from "./Modal";
import { useState } from "react";
import { Input } from "postcss";
const UploadModal = () => {
  const [isLoading, setIsLoading] = useState();
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
  const onSubmit: SubmitHandler<FieldValues> = async (values) => {};
  return (
    <Modal
      title="Add song"
      description="Upload an mp3 file"
      isOpen={uploadModal.isOpen}
      onChange={onChange}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="title"
          disabled={isLoading}
          {...register("title", { required: true })}
          placeholder="Song title"
        />
      </form>
    </Modal>
  );
};

export default UploadModal;
