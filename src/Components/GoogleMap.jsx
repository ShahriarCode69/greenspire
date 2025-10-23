const mapSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24172.125815316167!2d-74.00594199999999!3d40.712783699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sGreenspire!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus";

const GoogleMap = () => {
  return (
    <section className="h-[80vh] w-full">
      <div className="relative h-full w-full">
        <iframe
          src={mapSrc}
          title="Greenspire office location on Google Maps"
          className="h-full w-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
};

export default GoogleMap;
