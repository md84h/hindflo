import * as React from "react";
import {
  leakProofIcon,
  qualityTrustIcon,
  strengthIcon,
  uvResistantIcon,
} from "./common/image";

const FeatureSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Designed to give better performance and long durability
          </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">
            We focus on manufacturing high quality, ultra strong and customer
            satisfactory products
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12 md:space-y-0 text-center">
          <div>
            <div className="flex justify-center items-center mx-auto mb-4 w-24 h-24 rounded-full bg-blue-100 lg:h-24 lg:w-24 dark:bg-primary-900">
              {/* <svg className="w-10 h-10 text-primary-600 lg:w-10 lg:h-10 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> */}
              <img
                className=" w-16 h-16"
                alt="leak proof"
                src={leakProofIcon}
              />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Easy installtion & Leak Proof
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Simple installation, no drips. Say goodbye to plumbing headaches.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mx-auto mb-4 w-24 h-24 rounded-full bg-blue-100 lg:h-24 lg:w-24 dark:bg-primary-900">
              <img
                className=" w-16 h-16"
                alt="quality trust"
                src={qualityTrustIcon}
              />
              {/* <svg className="w-10 h-10 text-primary-600 lg:w-10 lg:h-10 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path></svg> */}
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              High Strength & Durability
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Exceptional durability, engineered for longevity. The ultimate
              solution for lasting performance.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mx-auto mb-4 w-24 h-24 rounded-full bg-blue-100 lg:h-24 lg:w-24 dark:bg-primary-900">
              <img className=" w-16 h-16" alt="strength" src={strengthIcon} />
              {/* <svg className="w-10 h-10 text-primary-600 lg:w-10 lg:h-10 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>                     */}
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Cost Effective & UV resistant
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Budget-friendly and UV-resistant. Achieve long-lasting protection
              without breaking the bank.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mx-auto mb-4 w-24 h-24 rounded-full bg-blue-100 lg:h-24 lg:w-24 dark:bg-primary-900">
              <img
                className=" w-16 h-16"
                alt="uv resistance"
                src={uvResistantIcon}
              />
              {/* <svg className="w-10 h-10 text-primary-600 lg:w-10 lg:h-10 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>                     */}
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Quality & Trust
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Quality you can trust, trust you can rely on. Choose our products
              for unmatched assurance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
