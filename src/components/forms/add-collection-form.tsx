"use client";

import { useActionState } from "react";
import { createCollection } from "@/actions/create-collection";
import FormButton from "./form-button";
import FormError from "./form-error";

export default function AddCollectionForm() {
  const [formState, formAction] = useActionState(createCollection, {
    errors: {},
  });

  return (
    <form
      action={formAction}
      className="z-10 abosolute center flex-col gap-2 left-[50%] top-[50%]">
      <label htmlFor="collectionTitle" className="formLabel">
        Collection Name:
      </label>
      <input type="text" name="title" className="formInput" />
      {formState.errors.title && (
        <FormError>{formState.errors.title}</FormError>
      )}
      {formState.errors._form && (
        <FormError>{formState.errors._form}</FormError>
      )}
      <FormButton>Add collection</FormButton>
    </form>
  );
}
