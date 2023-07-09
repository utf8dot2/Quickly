async function optimizeImages() {
  try {
    const images = document.querySelectorAll('.js-optimize-image');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          optimizeImage(entry.target)
            .then((optimizedSrc) => {
              entry.target.src = optimizedSrc;
              entry.target.classList.add('responsive-image');
            })
            .catch((error) => {
              console.error('Error optimizing image:', error);
            });
          observer.unobserve(entry.target);
        }
      });
    });

    images.forEach((image) => {
      observer.observe(image);
    });
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

async function optimizeImage(image) {
  return new Promise((resolve, reject) => {
    const originalSrc = image.dataset.src;
    const optimizationOptions = JSON.parse(image.dataset.optimizationOptions || '{}');

    const optimizedSrc = optimizeImageSource(originalSrc, optimizationOptions);

    const optimizedImage = new Image();

    optimizedImage.onload = function () {
      resolve(optimizedSrc);
    };

    optimizedImage.onerror = function () {
      reject(new Error('Failed to load image: ' + optimizedSrc));
    };

    optimizedImage.src = optimizedSrc;
  });
}

function optimizeImageSource(imageSrc, options) {
  const optimizedSrc = optimizationLibrary.optimize(imageSrc, options);
  return optimizedSrc;
}

window.addEventListener('load', optimizeImages);
