<script>
	import { onMount } from 'svelte';

	export let content;
	export let filter;

	onMount(() => {
		const searchBar = document.querySelector('#searchbar');
		const widgetSettingsList = document.querySelector('#widget-settings');
		const noContentState = document.querySelector('.state#no-content');

		const noContentStateText = noContentState.innerHTML;

		searchBar.addEventListener('input', () => {
			let input = searchBar.value.toLowerCase();

			console.log(input, filter);

			let widgetSettings = document.querySelectorAll(`.${filter}`);

			widgetSettings.forEach((widgetSetting) => {
				!widgetSetting.innerHTML.toLowerCase().includes(input)
					? widgetSetting.classList.add('hide')
					: widgetSetting.classList.remove('hide');
			});
			noContentState.innerHTML = noContentStateText + ' ' + input;

			if (
				noContentState &&
				widgetSettingsList.querySelectorAll(`.${filter}.hide`).length ==
					widgetSettingsList.querySelectorAll(`.${filter}`).length
			) {
				noContentState.classList.remove('hide');
			} else {
				noContentState.classList.add('hide');
			}
		});
	});
</script>

<div>
	<label>
		<input placeholder="" id="searchbar" type="text" />
		<span>{content}</span>
	</label>
</div>

<style>
	div {
		margin: 0.8rem;
		height: 3rem;
	}
	label {
		position: relative;
		/* padding: 0 .8rem; */
	}
	span {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: 0.8rem;
		font-size: 1rem;
		background-color: white;
		border: 3px solid white;
		transition: 0.2s;
	}
	input {
		width: 100%;
		height: 100%;
		padding-left: 1rem;
		border-radius: 6px;
		border: 1px solid gray;
		transition: 0.2s;
	}
	input:focus {
		/* background-color: white; */
		outline: 2px solid var(--c-primary-werktijden);
		border: none;
	}
	input:focus + span,
	input:not(:placeholder-shown) + span {
		top: -1rem;
		font-size: 0.9rem;
		color: var(--c-primary-werktijden);
	}
</style>
