# Quickly
A standalone JavaScript and CSS implementation of Lazyload, Aspect Ratio Preservation, and Image Optimization. 

Remember to adjust the CSS to suit your specific design requirements, such as center alignment or different aspect ratios.

Optimization Options: Images can now have 'data-optimization-options' attributes, allowing you to specify different optimization options like width, quality, or any other parameters required by your optimization library or API.

Lazy Loading: Images are given the class 'js-optimize-image', and the Intersection Observer API is used to observe their visibility. Images are optimized and made responsive only when they enter the viewport.

Aspect Ratio Preservation: The updated HTML code includes a new class 'aspect-ratio-container' that wraps each image. This class is used to maintain the aspect ratio of the images, preventing distortion when resizing.

'optimizeImageSource' function: This function is added to handle image optimization based on the specified optimization options. You can replace the example code with your own logic that utilizes your chosen optimization library or API.

Breakpoint-based Responsiveness: Modify the responsive behavior to change the image's size or quality based on the device's screen size. This can be achieved using media queries or responsive image techniques like srcset and sizes attributes.

Usage:

"<img class="js-optimize-image" data-src="image.jpg" data-optimization-options='{"width": 800, "quality": 80}' alt="Image 1>"
