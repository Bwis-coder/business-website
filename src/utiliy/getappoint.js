const bookAppointment = () => {
  const phone = "2349037455456";
  const message = "Hi, I would like to book an appointment";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank", "noopener,noreferrer");
};

export { bookAppointment };
