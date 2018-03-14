const inputs = document.querySelectorAll('.controls input');

inputs.forEach(function(input) {
  input.addEventListener('change', handleUpdate )
  input.addEventListener('mousemove', handleUpdate)
} );

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(
  `--${this.name}`, this.value + suffix
  );
}
