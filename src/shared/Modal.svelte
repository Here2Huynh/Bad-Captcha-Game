<script context="module">
	export function bind(Component, props = {}) {
		return function ModalComponent(options) {
			return new Component({
				...options,
				props: {
					...props,
					...options.props
				}
			});
		};
	}
</script>
