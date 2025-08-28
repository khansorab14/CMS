import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2, Upload } from "lucide-react";

interface ImageUploaderProps {
  title: string;
  description?: string;
  preferredSize?: string;
  maxSizeMB?: number;
  onUpload?: (file: File) => void;
  onDelete?: () => void;
}

export function ImageUploader({
  title,
  description,
  preferredSize = "240px x 240px @ 72 DPI",
  maxSizeMB = 1,
  onUpload,
  onDelete,
}: ImageUploaderProps) {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > maxSizeMB * 1024 * 1024) {
        alert(`File size must be less than ${maxSizeMB}MB`);
        return;
      }
      setPreview(URL.createObjectURL(file));
      onUpload?.(file);
    }
  };

  const handleDelete = () => {
    setPreview(null);
    onDelete?.();
  };

  return (
    <div className="flex items-center gap-6">
      <Card className="w-60 h-40 flex items-center justify-center border border-dashed">
        <CardContent className="flex items-center justify-center p-2">
          {preview ? (
            <img
              src={preview}
              alt="Preview"
              className="max-h-32 object-contain"
            />
          ) : (
            <span className="text-muted-foreground text-sm">
              No Logo Uploaded
            </span>
          )}
        </CardContent>
      </Card>

      <div className="flex flex-col gap-2">
        <h3 className="text-base font-medium">{title}</h3>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
        <p className="text-sm text-red-500">
          Preferred Image Size: {preferredSize}. Max size {maxSizeMB}MB.
        </p>
        <div className="flex gap-2">
          <Input
            type="file"
            accept="image/*"
            className="hidden"
            id="logo-upload"
            onChange={handleFileChange}
          />
          <label htmlFor="logo-upload">
            <Button variant="default" asChild>
              <span className="flex items-center gap-2 cursor-pointer">
                <Upload className="w-4 h-4" />
                Upload Logo
              </span>
            </Button>
          </label>
          {preview && (
            <Button variant="outline" onClick={handleDelete}>
              <Trash2 className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
