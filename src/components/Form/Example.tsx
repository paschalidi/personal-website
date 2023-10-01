import React from "react";
import { FormInput } from "./FormInput";
import { Form, Formik } from "formik";
import * as Yup from "yup";

export const FormExample = () => (
  <>
    <div className="space-y-3">
      <div className="flex">
        <div className="grid grid-cols-3 gap-2">
          <div>
            <Formik
              initialValues={{ email: "" }}
              onSubmit={() => {
                // todo here we handle the form
                console.log("submit");
              }}
            >
              <Form>
                <FormInput
                  placeholder="Enter your email"
                  name="email"
                  required={true}
                />
              </Form>
            </Formik>
          </div>
          <div>
            <Formik
              initialValues={{ email: "" }}
              onSubmit={() => {
                // todo here we handle the form
                console.log("submit");
              }}
            >
              <Form name="email">
                <FormInput
                  iconPosition={"left"}
                  placeholder="Enter your email"
                  name="email"
                  required={true}
                />
              </Form>
            </Formik>
          </div>
          <div>
            <Formik
              initialValues={{ email: "" }}
              onSubmit={() => {
                // todo here we handle the form
                console.log("submit");
              }}
            >
              <Form>
                <FormInput
                  iconPosition={"right"}
                  placeholder="Enter your email"
                  name="email"
                  required={true}
                />
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
    <div className="space-y-3 pt-4">
      <div className="flex">
        <div className="grid grid-cols-3 gap-2">
          <div>
            <Formik
              initialValues={{ email: "" }}
              onSubmit={() => {
                // todo here we handle the form
                console.log("submit");
              }}
            >
              <Form>
                <FormInput
                  placeholder="Enter your password"
                  name="password"
                  required={true}
                />
              </Form>
            </Formik>
          </div>
          <div>
            <Formik
              initialValues={{ password: "" }}
              onSubmit={() => {
                // todo here we handle the form
                console.log("submit");
              }}
            >
              <Form>
                <FormInput
                  name="password"
                  iconPosition={"left"}
                  placeholder="Enter your password"
                  type="password"
                  required={true}
                />
              </Form>
            </Formik>
          </div>
          <div>
            <Formik
              initialValues={{ password: "" }}
              onSubmit={() => {
                // todo here we handle the form
                console.log("submit");
              }}
            >
              <Form>
                <FormInput
                  name="password"
                  iconPosition={"right"}
                  placeholder="Enter your password"
                  type="password"
                  required={true}
                />
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
    <div className="space-y-3 pt-4">
      <div className="flex">
        <div className="grid grid-cols-3 gap-2">
          <div>
            <Formik
              initialValues={{ password: "" }}
              onSubmit={() => {
                // todo here we handle the form
                console.log("submit");
              }}
            >
              <Form>
                <FormInput
                  name="password"
                  placeholder="Enter your password"
                  type="password"
                  disabled={true}
                />
              </Form>
            </Formik>
          </div>
          <div>
            <Formik
              initialValues={{ password: "" }}
              onSubmit={() => {
                // todo here we handle the form
                console.log("submit");
              }}
            >
              <Form>
                <FormInput
                  name="password"
                  iconPosition={"left"}
                  placeholder="Enter your password"
                  type="password"
                  disabled={true}
                />
              </Form>
            </Formik>
          </div>
          <div>
            <Formik
              initialValues={{ password: "" }}
              onSubmit={() => {
                // todo here we handle the form
                console.log("submit");
              }}
            >
              <Form name="password">
                <FormInput
                  name="password"
                  iconPosition={"right"}
                  placeholder="Enter your password"
                  type="password"
                  disabled={true}
                />
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>

    <div className="space-y-3 pt-4">
      <div className="flex">
        <div className="grid grid-cols-3 gap-2">
          <div>
            <Formik
              validateOnMount
              validationSchema={Yup.object().shape({
                email: Yup.string().required("Required"),
              })}
              initialValues={{ email: "" }}
              onSubmit={() => {
                // todo here we handle the form
                console.log("submit");
              }}
            >
              {({ errors }) => {
                return (
                  <Form>
                    <FormInput
                      placeholder="With error message"
                      name="email"
                      required={true}
                    />
                    {errors.email && (
                      <div className="pt-1 text-red-400 text-sm">
                        {errors.email}
                      </div>
                    )}
                  </Form>
                );
              }}
            </Formik>
          </div>
          <div>
            <Formik
              validateOnMount
              validationSchema={Yup.object().shape({
                email: Yup.string().required("Required"),
              })}
              initialValues={{ email: "" }}
              onSubmit={() => {
                // todo here we handle the form
                console.log("submit");
              }}
            >
              {({ errors }) => {
                return (
                  <Form>
                    <FormInput
                      iconPosition={"left"}
                      placeholder="With error message"
                      name="email"
                      required={true}
                    />
                    {errors.email && (
                      <div className="pt-1 text-red-400 text-sm">
                        {errors.email}
                      </div>
                    )}
                  </Form>
                );
              }}
            </Formik>
          </div>
          <div>
            <Formik
              validateOnMount
              validationSchema={Yup.object().shape({
                email: Yup.string().required("Required"),
              })}
              initialValues={{ email: "" }}
              onSubmit={() => {
                // todo here we handle the form
                console.log("submit");
              }}
            >
              {({ errors }) => {
                return (
                  <Form>
                    <FormInput
                      iconPosition={"right"}
                      placeholder="With error message"
                      name="email"
                      required={true}
                    />
                    {errors.email && (
                      <div className="pt-1 text-red-400 text-sm">
                        {errors.email}
                      </div>
                    )}
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  </>
);
