from PIL import Image
import os

def crop_images_to_reference(source_dir):
    # Open the reference image to get its dimensions
    ref_width = 200 
    ref_height = 200
    # Iterate over all files in the source directory
    for filename in os.listdir(source_dir):
        if filename.endswith(('.png', '.jpg', '.jpeg', '.gif', '.bmp')) and filename!="teaser-banner.jpg":  # Adjust the file extensions as needed
            file_path = os.path.join(source_dir, filename)
            try:
                with Image.open(file_path) as img:
                    # Calculate the crop box centered on the image
                    width, height = img.size
                    if not (width == 200 and height == 200): 
                        left = (width - ref_width) / 2
                        top = (height - ref_height) / 2
                        right = (width + ref_width) / 2
                        bottom = (height + ref_height) / 2

                        # Crop the image to match the reference dimensions
                        cropped_img = img.crop((left, top, right, bottom))
                        cropped_img.save(file_path)  # Overwrite the original image with the cropped one
                        print(f"Cropped {filename} to {ref_width}x{ref_height} pixels")
            except Exception as e:
                print(f"Error cropping {filename}: {e}")

if __name__ == "__main__":
    # Define the directory containing the images and the path to the reference image
    images_directory = './assets/images/' # Adjust this to the correct image file path

    # Call the function to crop images
    crop_images_to_reference(images_directory)
