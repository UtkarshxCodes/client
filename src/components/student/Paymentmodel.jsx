import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PaymentModal = ({
  isOpen,
  onClose,
  coursePrice,
  discountAmount = 0,
  courseData,
}) => {
  const finalAmount = (coursePrice - discountAmount).toFixed(2);

  if (!isOpen) return null;

  const handleApprove = (orderId) => {
    // Handle successful payment
    console.log("Payment successful with Order ID:", orderId);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-[9999]">
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-xs flex flex-col items-center relative">
        <button
          className="absolute top-2 right-3 text-gray-400 hover:text-red-500 text-2xl"
          onClick={onClose}
        >
          ×
        </button>
        <h2 className="text-xl font-semibold mb-4 text-center">
          Pay with PayPal
        </h2>
        <div className="w-full">
          <PayPalScriptProvider
            options={{
              "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID,
              currency: "USD",
            }}
          >
            <PayPalButtons
              style={{ layout: "vertical" }}
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: finalAmount,
                      },
                    },
                  ],
                });
              }}
              onApprove={(data, actions) => {
                return actions.order.capture().then((details) => {
                  handleApprove(details.id);
                });
              }}
              onError={(err) => {
                console.error("PayPal Payment Error:", err);
              }}
            />
          </PayPalScriptProvider>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
