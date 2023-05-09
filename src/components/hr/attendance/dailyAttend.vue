<template>
	<div>
		<h1>일근태조회</h1>
		<b-table
			:items="newSlipForm"
			:fields="dailyAttendFeild"
		/>
	</div>
</template>


<script>
export default {
  name: "dailyAttend"
}
</script>

<style scoped>

</style>
