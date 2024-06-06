<template>
  <div>
    <vue-particles
      class="z-10"
      id="tsparticles"
      :options="{
        background: {
          color: {
            value: '#ffffff'
          }
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: 'push'
            },
            onHover: {
              enable: false,
              mode: 'repulse'
            }
          }
        },
        particles: {
          color: {
            value: '#000000'
          },
          links: {
            color: '#000000',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: 'bounce',
            random: false,
            speed: 1,
            straight: false
          },
          number: {
            density: {
              enable: true
            },
            value: 200
          },
          opacity: {
            value: 0.5
          },
          shape: {
            type: 'circle'
          },
          size: {
            value: { min: 1, max: 5 }
          }
        },
        detectRetina: true
      }"
    />
  </div>
</template>
<script setup></script>
