import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent {

  @ViewChild('fileInput') fileInput!: ElementRef;
  selectedPhotoUrl: string = 'https://static.vecteezy.com/system/resources/thumbnails/019/900/322/small/happy-young-cute-illustration-face-profile-png.png';

  openFileInput() {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: any) {
    const selectedFile = event.target.files[0];
    this.resizePhoto(selectedFile, (resizedImage: string) => {
      this.selectedPhotoUrl = resizedImage;
    });
    this.selectedPhotoUrl = URL.createObjectURL(selectedFile);
  }

  resizePhoto(file: File, callback: (resizedImage: string) => void) {
    const reader = new FileReader();
    reader.onload = (event: any) => {
      const img = new Image();
      img.src = event.target.result;

      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d')!;
        const maxWidth = 200;
        const maxHeight = 200;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxWidth) {
            width = maxWidth;
            height = maxHeight;
          }
        } else {
          if (height > maxHeight) {
            height = maxHeight;
            width = maxWidth;
          }
        }

        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);

        const resizedImage = canvas.toDataURL('image/png');
        console.log('Selected file:', resizedImage);
        callback(resizedImage);
      };
    };

    reader.readAsDataURL(file);
  }

}
