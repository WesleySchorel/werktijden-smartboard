<script>
	import { onMount } from 'svelte';
	import cross from '$lib/assets/cross.svg';

	export let content;
	export let filter;

	onMount(() => {
		const searchBar = document.querySelector('#searchbar');
		const widgetSettingsList = document.querySelector('#widget-settings');
		const noContentState = document.querySelector('.state#no-content');
		const crossBtn = document.querySelector('#clear');

		const noContentStateText = noContentState.innerHTML;

		crossBtn.addEventListener('click', () => {
			searchBar.value = null;
			searchBar.dispatchEvent(new Event('input'));
			crossBtn.classList.add('hide');
		});

		searchBar.addEventListener('input', () => {
			let input = searchBar.value.toLowerCase();

			input != '' ? crossBtn.classList.remove('hide') : crossBtn.classList.add('hide');

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
		<button id="clear" class="hide" aria-label="clear searchbar">
			<img src={cross} alt="" />
		</button>
	</label>
</div>

<style>
	div {
		position: relative;
		height: 2.4rem;
	}
	label {
		position: relative;
	}
	#clear {
		all: unset;
		cursor: pointer;
		position: absolute;
		top: 50%;
		right: 0.7rem;
		transform: translateY(-50%);
		height: min-content;
		opacity: 0.5;
	}
	#clear:hover {
		opacity: 1;
	}
	span {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: 0.7rem;
		font-size: 1rem;
		background-color: white;
		border: 2px solid white;
		color: var(--c-text-secondary);
		pointer-events: none;
		transition: 0.2s;
	}
	input {
		width: 100%;
		height: 100%;
		padding-left: 0.7rem;
		border-radius: var(--border-radius-default);
		border: var(--border-default);
		background-color: white;
		transition: 0.2s;
	}
	input:hover {
		background-color: var(--c-background);
	}
	label:hover span {
		background-color: var(--c-background);
		border: 2px solid var(--c-background);
	}
	input:focus {
		outline: none;
		border: var(--border-focus);
		background-color: var(--c-background);
	}
	input:not(:placeholder-shown) {
		background-color: var(--c-background);
	}
	input:focus + span,
	input:not(:placeholder-shown) + span {
		top: -0.5rem;
		font-size: 0.8rem;
		color: var(--c-primary-werktijden);
		background-color: var(--c-background);
		border: 2px solid var(--c-background);
	}
</style>
