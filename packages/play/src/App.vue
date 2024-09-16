<script setup lang="ts">
const handleBtnClick = () => {
  console.log('click')
}

const handleNotify = () => {
  
}

const callMessageBox = () => {
  
}
</script>

<template>
 <p>
      <lee-button @click="handleBtnClick" :use-throttle="false"
        >Default</lee-button
      >
      <lee-button type="primary" @click="handleNotify">Primary</lee-button>
      <lee-button type="success" @click="console.log('click')"
        >Success</lee-button
      >
      <lee-button type="info" @click="callMessageBox">Info</lee-button>
      <lee-button type="warning">Warning</lee-button>
      <lee-popconfirm title="Are you sure to delete this?">
        <lee-button type="danger">Danger</lee-button>
      </lee-popconfirm>
    </p>
    <p>
      <lee-button plain>Plain</lee-button>
      <lee-button type="primary" plain>Primary</lee-button>
      <lee-button type="success" plain>Success</lee-button>
      <lee-button type="info" plain>Info</lee-button>
      <lee-button type="warning" plain>Warning</lee-button>
      <lee-button type="danger" plain>Danger</lee-button>
    </p>
    <p>
      <lee-button round>Round</lee-button>
      <lee-button type="primary" round>Primary</lee-button>
      <lee-button type="success" round>Success</lee-button>
      <lee-button type="info" round>Info</lee-button>
      <lee-button type="warning" round loading>Warning</lee-button>
      <lee-button type="danger" round>Danger</lee-button>
    </p>
    <p>
      <lee-button icon="search" circle />
      <lee-button type="primary" icon="edit" circle />
      <lee-button type="success" icon="check" circle />
      <lee-button type="info" icon="message" circle />
      <lee-button type="warning" icon="star" circle />
      <lee-button type="danger" icon="trash" circle />
    </p>
    <p>
      <lee-button-group size="small" type="primary">
        <lee-button round>Round</lee-button>
        <lee-button type="primary" round>Primary</lee-button>
        <lee-button type="success" round>Success</lee-button>
        <lee-button type="info" round>Info</lee-button>
        <lee-button type="warning" round loading>Warning</lee-button>
        <lee-button type="danger" round>Danger</lee-button>
      </lee-button-group>
    </p>
</template>


