from PIL import Image
import os

def resize_images_to_reference(source_dir, reference_image_path):
    # Open the reference image to get its dimensions
    with Image.open(reference_image_path) as reference_image:
        ref_width, ref_height = reference_image.size

    # Iterate over all files in the source directory
    for filename in os.listdir(source_dir):
        if filename.endswith(('.png', '.jpg', '.jpeg', '.gif', '.bmp')):  # Adjust the file extensions as needed
            file_path = os.path.join(source_dir, filename)
            try:
                with Image.open(file_path) as img:
                    # Resize the image to match the reference dimensions
                    resized_img = img.resize((ref_width, ref_height), Image.LANCZOS)
                    resized_img.save(file_path)  # Overwrite the original image with the resized one
                    print(f"Resized {filename} to {ref_width}x{ref_height} pixels")
            except Exception as e:
                print(f"Error resizing {filename}: {e}")

if __name__ == "__main__":
    # Define the directory containing the images and the path to the reference image
    images_directory = './assets/images/'
    reference_image = './assets/images/profile-pic.jpeg'  # Adjust this to the correct image file path

    # Call the function to resize images
    resize_images_to_reference(images_directory, reference_image)
