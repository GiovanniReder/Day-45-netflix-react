function MyProfile (){
<>

<div
      class="d-flex max-width flex-column flex-wrap w-50 mx-auto"
      style={{maxWidth: "500px"}}
    >
      <div class="">
        <h2 class="text-white profile-h2-size">Edit Profile</h2>
      </div>
      <div
        class="mt-2 border border-secondary border-end-0 border-start-0 p-3 bg-dark"
      >
        <div class="row g-0">
          <div class="col me-3">
            <img
              src="assets/avatar.png"
              width="150px"
              class="img-fluid rounded"
              alt="..."
            />
          </div>
          <div class="col-md-6">
            <div
              class="card-body mt-1 border border-secondary border-top-0 border-end-0 border-start-0"
            >
              <p class="card-text bg-secondary p-2 text-white">
                Strive Student
              </p>
              <p class="card-text text-secondary mb-1 mt-4">Language:</p>
              <div class="dropdown">
                <button
                  class="btn btn-dark border border-secondary rounded-0 p-2 mb-4 dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  English
                </button>
                <ul class="dropdown-menu border bg-dark">
                  <li>
                    <a class="dropdown-item text-white" href="language">Italian</a>
                  </li>
                  <li>
                    <a class="dropdown-item text-white" href="language">Spanish</a>
                  </li>
                  <li>
                    <a class="dropdown-item text-white" href="language">French</a>
                  </li>
                </ul>
              </div>
            </div>

           

            <div
              class="card-body border border-secondary border-top-0 border-end-0 border-start-0"
            >
              <p class="card-text mt-4 text-light">Maturity Settings:</p>
              <p class="card-text bg-secondary fs-badge p-1 w-50 text-white">
                ALL MATURITY RATINGS
              </p>
              <p class="card-text text-light">
                Show titles of all maturity ratings for this profile.
              </p>
              <button
                class="btn btn-dark mb-4 border border-secondary rounded-0 px-4"
                type="submit"
              >
                Edit
              </button>
            </div>

        

            <div class="form-check">
              <p class="text-white mt-3">Autoplay controls</p>
              <input
                class="form-check-input bg-dark"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label class="form-check-label text-white" for="defaultCheck1">
                Autoplay next episode in a series on all devices.
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input bg-dark"
                type="checkbox"
                value=""
                id="defaultCheck2"
              />
              <label class="form-check-label text-white" for="defaultCheck2">
                Autoplay previous while browsing on all devices.
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="gap-btn mt-4 d-flex">
        <button
          class="btn btn-dark rounded-0 border border-secondary"
          type="button"
        >
          SAVE
        </button>
        <button
          class="btn btn-dark rounded-0 border border-secondary"
          type="button"
        >
          CANCEL
        </button>
        <button
          class="btn btn-dark rounded-0 border border-secondary"
          type="button"
        >
          DELETE PROFILE
        </button>
      </div>
    </div>
   
</>      
    

}

export default MyProfile;



