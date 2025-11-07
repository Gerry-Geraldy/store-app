import React from "react";

const FormTable = () => {
  return (
    <section>
      <form className="flex flex-col gap-4">
        <label>
          Enter your product:
          <input type="text" />
        </label>
         <label>
          Enter your image:
          <input type="image" />
        </label>
         <label>
          Enter your price:
          <input type="text" />
        </label>
         <label>
          Enter your stock:
          <input type="text" />
        </label>
      </form>
    </section>
  );
};

export default FormTable;
