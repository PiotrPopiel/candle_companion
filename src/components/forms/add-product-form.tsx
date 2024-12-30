"use client";

import { useActionState } from "react";
import { createProduct } from "@/actions/create-product";
import FormButton from "./form-button";
import FormError from "./form-error";

type AddProductFormProps = {
  collections: string[] | undefined;
};

export default function AddProductForm({ collections }: AddProductFormProps) {
  const [formState, formAction] = useActionState(createProduct, { errors: {} });

  return (
    <form
      action={formAction}
      className="center flex-col gap-6 mt-10 w-[400px] border p-8">
      {/* Name Input */}
      <div className="center flex-col">
        <label htmlFor="title" className="formLabel">
          Name:
        </label>
        <input type="text" name="title" id="title" className="formInput" />
        {formState.errors.title && (
          <FormError>{formState.errors.title}</FormError>
        )}
      </div>

      {/* Collection Select */}
      <div className="center flex-col gap-2">
        <div className="center w-full flex-col ">
          <label htmlFor="collectionId" className="formLabel">
            Collection:
          </label>
          <select
            name="collection"
            id="collectionId"
            defaultValue=""
            className="formInput text-sm cur">
            <option value="" disabled className="text-gray-400">
              Select Collection...
            </option>

            {collections &&
              collections.map((collection, idx) => (
                <option value={collection} key={idx}>
                  {collection}
                </option>
              ))}
          </select>
        </div>
        {formState.errors.collection && (
          <FormError>{formState.errors.collection}</FormError>
        )}
      </div>

      {/* Material Cost Input */}
      <div className="center flex-col">
        <label htmlFor="materialCost" className="formLabel">
          Material Cost:
        </label>
        <input
          type="number"
          name="materialCost"
          step=".01"
          id="materialCost"
          className="formInput"
        />
      </div>

      {/* Price Input */}
      <div className="center flex-col">
        <label htmlFor="price" className="formLabel">
          Price:
        </label>
        <input
          type="number"
          step=".01"
          name="price"
          id="price"
          className="formInput"
        />
      </div>
      {formState.errors._form && (
        <FormError>{formState.errors._form}</FormError>
      )}
      <FormButton>Add Product</FormButton>
    </form>
  );
}
