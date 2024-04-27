import React from 'react';

function MySettings() {
  
    <>
    <div className="d-flex max-width mt-5 flex-column flex-wrap">
        <div className="w-75 mx-auto">
          <h2 className="fs-1">Account</h2>
        </div>
        <div
          className="w-75 mx-auto border border-secondary border-end-0 border-start-0 p-3"
        >
          <div className="row">
            <div className="col">
              <p className="text-secondary">MEMBERSHIP & BILLING</p>
              <button className="border-0 p-2">Cancel Membership</button>
            </div>
            <div className="col-md-9">
              <div className="card-body d-flex justify-content-between my-1">
                <p className="card-text me-5">student@strive.school</p>
                <p className="ms-5 text-info">Change account email</p>
              </div>
              <div className="card-body d-flex justify-content-between my-1">
                <p className="card-text me-5">Password:*******</p>
                <p className="ms-5 text-info">Change password</p>
              </div>
              <div className="card-body d-flex justify-content-between my-1">
                <p className="card-text me-5">Phone: 321 044 1279</p>
                <p className="ms-5 text-info">change</p>
              </div>
            </div>
            <div
              className="row border border-secondary border-bottom-0 border-end-0 border-start-0"
            >
              <div className="col"></div>
              <div className="col-md-9">
                <div className="card-body my-3 d-flex justify-content-between my-1">
                  <p className="card-text">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-paypal"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M14.06 3.713c.12-1.071-.093-1.832-.702-2.526C12.628.356 11.312 0 9.626 0H4.734a.7.7 0 0 0-.691.59L2.005 13.509a.42.42 0 0 0 .415.486h2.756l-.202 1.28a.628.628 0 0 0 .62.726H8.14c.429 0 .793-.31.862-.731l.025-.13.48-3.043.03-.164.001-.007a.35.35 0 0 1 .348-.297h.38c1.266 0 2.425-.256 3.345-.91q.57-.403.993-1.005a4.94 4.94 0 0 0 .88-2.195c.242-1.246.13-2.356-.57-3.154a2.7 2.7 0 0 0-.76-.59l-.094-.061ZM6.543 8.82a.7.7 0 0 1 .321-.079H8.3c2.82 0 5.027-1.144 5.672-4.456l.003-.016q.326.186.548.438c.546.623.679 1.535.45 2.71-.272 1.397-.866 2.307-1.663 2.874-.802.57-1.842.815-3.043.815h-.38a.87.87 0 0 0-.863.734l-.03.164-.48 3.043-.024.13-.001.004a.35.35 0 0 1-.348.296H5.595a.106.106 0 0 1-.105-.123l.208-1.32z"
                      />
                    </svg>
                    Paypal
                  </p>
                  <div className="d-flex flex-column justify-content-end">
                    <p className="text-info">Update payment info</p>
                    <p className="text-info">Billing details</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="d-flex border pt-3 border-secondary border-end-0 border-start-0 border-bottom-0 flex-column justify-content-end"
            >
              <p className="d-flex justify-content-end text-info">
                Redeem gift card or promo code
              </p>

              <p className="text-info d-flex justify-content-end">
                Where to buy gift cards
              </p>
            </div>
          </div>
        </div>

      

        <div
          className="w-75 mx-auto border border-secondary border-top-0 border-end-0 border-start-0 p-3"
        >
          <div className="row">
            <div className="col">
              <p className="text-secondary">PLAN DETAILS</p>
            </div>
            <div className="col-md-9">
              <div className="card-body d-flex justify-content-between my-1">
                <p className="card-text font-monospace me-5">
                  Premium
                  <span className="border border-dark border-2 p-1"
                    >ULTRA <span className="fw-bold">HD</span></span
                  >
                </p>
                <p className="ms-5 text-info">Change plan</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p className="text-secondary"></p>
            </div>
            <div className="col-md-9">
              <div className="card-body d-flex flex-column my-1">
                <p className="ms-5 text-info"></p>
              </div>
            </div>
          </div>
        </div>

      

        <div
          className="w-75 mx-auto border border-secondary border-top-0 border-end-0 border-start-0 p-3"
        >
          <div className="row">
            <div className="col">
              <p className="text-secondary">SETTINGS</p>
            </div>
            <div className="col-md-9">
              <div className="card-body d-flex justify-content-between">
                <p className="text-info">Parental controls</p>
              </div>
              <div className="card-body d-flex justify-content-between">
                <p className="text-info">Test participation</p>
              </div>
              <div className="card-body d-flex justify-content-between">
                <p className="text-info">Manage download devices</p>
              </div>
              <div className="card-body d-flex justify-content-between">
                <p className="text-info">Activate a device</p>
              </div>
              <div className="card-body d-flex justify-content-between">
                <p className="text-info">Recent device streaming activity</p>
              </div>
              <div className="card-body d-flex justify-content-between">
                <p className="text-info">Sign out of all devices</p>
              </div>
            </div>
          </div>
        </div>

        

        <div className="w-75 mx-auto">
          <div className="row my-4">
            <div className="col">
              <p className="text-secondary">MY PROFILE</p>
            </div>
            <div className="grid w-75 d-flex justify-content-between">
              <div className="g-col-3">
                <p className="fw-bold">
                  <img width="50px" src="assets/avatar.png" alt="avatar" />
                  Strive student
                </p>
                <p className="text-info">Language</p>
                <p className="text-info">Playback settings</p>
                <p className="text-info">Subtitle appeareance</p>
              </div>
              <div className="g-col-3 d-flex flex-column justify-content-center">
                <p className="text-info">Viewing activity</p>
                <p className="text-info">Ratings</p>
              </div>
              <div className="g-col-3 d-flex flex-column align-items-start">
                <p className="text-info">Manage profiles</p>
                <p className="text-info">Add profile email</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </>
  
}

export default MySettings;
