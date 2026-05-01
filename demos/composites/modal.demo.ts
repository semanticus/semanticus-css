export const ModalDemo = {
  basicModal() {
    return `<div style="min-height: 215px;">
  <dialog open>
    <article>
      <header>
        <button aria-label="Close" rel="prev"></button>
        <p>
          <strong>&#x1F4C5; Thank You for Registering!</strong>
        </p>
      </header>
      <p>
        We're excited to have you join us for our
        upcoming event. Please arrive at the museum
        on time to check in and get started.
      </p>
      <ul>
        <li>Date: Saturday, April 15</li>
        <li>Time: 10:00am - 12:00pm</li>
      </ul>
    </article>
  </dialog>
</div>
`;
  },

  withFooter() {
    return `<div style="min-height: 300px;">
  <dialog open>
    <article>
      <h2>Confirm Your Membership</h2>
      <p>
        Thank you for signing up for a membership!
        Please review the membership details below:
      </p>
      <ul>
        <li>Membership: Individual</li>
        <li>Price: $10</li>
      </ul>
      <footer>
        <button class="secondary">
          Cancel
        </button>
        <button>Confirm</button>
      </footer>
    </article>
  </dialog>
</div>
`;
  },

  cssOnlyModal() {
    return `<div style="min-height: 270px;">
  <!-- Trigger button -->
  <a href="#modal-example" role="button">Open Modal</a>

  <!-- Modal -->
  <dialog id="modal-example">
    <article>
      <header>
        <a href="#!" aria-label="Close" rel="prev"></a>
        <h3>CSS-only Modal</h3>
      </header>
      <p>
        This modal is triggered purely with CSS using the :target pseudo-class.
        No JavaScript required!
      </p>
      <footer>
        <a href="#!" role="button" class="secondary">Close</a>
        <a href="#!" role="button">Confirm</a>
      </footer>
    </article>
  </dialog>
</div>
`;
  },
};
