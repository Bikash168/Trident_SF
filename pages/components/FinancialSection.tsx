import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const FinancialDetails = () => {
  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-green-500">
          Financial <span className="text-white">Details</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Financial Details Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Financial Details</h2>
            <div className="text-sm">
              <div className="grid grid-cols-2 gap-4">
                <div className="font-bold">Registration No:</div>
                <div>044306</div>
                <div className="font-bold">CIN:</div>
                <div>U72100OD2023NPL044306</div>
                <div className="font-bold">PAN No:</div>
                <div>ABMCS1452Q</div>
                <div className="font-bold">80G Registration Number:</div>
                <div>ABMCS1452QF20231</div>
                <div className="font-bold">12A Registration Number:</div>
                <div>ABMCS1452QE20231</div>
                <div className="font-bold">NITI Aayog / NGO DARPAN ID:</div>
                <div>OR/2024/0398886</div>
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-yellow-400">Donor&apos;s Testimonial</h2>

            {/* Swiper Carousel for Testimonials */}
            <Swiper
              spaceBetween={30}
              pagination={{ clickable: true }}
              navigation={true}
              modules={[Navigation, Pagination]}
              className="testimonial-slider swiperpad"
            >
              <SwiperSlide>
                <div className="testimonial-slide text-white">
                  <p className="italic mb-4">
                    &quot;I have spent a lifetime with charities and over the years got polarized from the many organizations that existed as tax shelters or for profiteering.&quot;
                  </p>
                  <p className="font-bold">Mr. Ajay Agarwal</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial-slide text-white">
                  <p className="italic mb-4">
                    &quot;Roughly two years ago, a young lady from Raise India Foundation (RIF), called me out of the cold seeking donations.&quot;
                  </p>
                  <p className="font-bold">Mr. Ajay Agarwal</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial-slide text-white">
                  <p className="italic mb-4">
                    &quot;After 8 months of her trying, I agreed to help and by sheer luck, I also got to know the organization and their mission.&quot;
                  </p>
                  <p className="font-bold">Mr. Ajay Agarwal</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialDetails;
