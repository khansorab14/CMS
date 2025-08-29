import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  MouseSensor,
  TouchSensor,
  KeyboardSensor,
  type DragEndEvent,
} from "@dnd-kit/core";

import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";
import { GripVertical, X } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

function SortableOption({
  id,
  value,
  onChange,
  onRemove,
}: {
  id: string;
  value: string;
  onChange: (v: string) => void;
  onRemove: () => void;
}) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="flex items-center gap-2 bg-background"
    >
      {/* Drag Handle */}
      <Button
        {...attributes}
        {...listeners}
        variant="ghost"
        size="icon"
        className="cursor-grab active:cursor-grabbing"
        type="button"
      >
        <GripVertical className="h-5 w-5 text-muted-foreground" />
      </Button>

      {/* Option Input */}
      <Input value={value} onChange={(e) => onChange(e.target.value)} />

      {/* Remove Option */}
      <Button variant="ghost" size="icon" type="button" onClick={onRemove}>
        <X className="h-4 w-4 text-red-500" />
      </Button>
    </div>
  );
}

export default function FieldForm() {
  const [options, setOptions] = useState([]);
  const [error, setError] = useState(false);
  const [type, setType] = useState("dropdown-single");
  const [value, setValue] = useState("");

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor)
  );

  const handleAddOption = () => {
    setOptions([
      ...options,
      { id: Date.now().toString(), value: `Option ${options.length + 1}` },
    ]);
  };

  const handleChange = (val: string, id: string) => {
    setOptions(
      options.map((opt) => (opt.id === id ? { ...opt, value: val } : opt))
    );
  };

  const handleRemove = (id: string) => {
    setOptions(options.filter((opt) => opt.id !== id));
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = options.findIndex((opt) => opt.id === active.id);
      const newIndex = options.findIndex((opt) => opt.id === over?.id);
      setOptions(arrayMove(options, oldIndex, newIndex));
    }
  };

  return (
    <div className="space-y-6 max-w-lg mx-auto">
      {/* Name */}
      <div className="space-y-2">
        <Label htmlFor="name">
          Name <span className="text-red-500">*</span>
        </Label>
        <Input id="name" placeholder="Enter Name" required />
      </div>

      {/* Type */}
      <div className="space-y-2">
        <Label>
          Type <span className="text-red-500">*</span>
        </Label>
        <Select value={type} onValueChange={(val) => setType(val)}>
          <SelectTrigger>
            <SelectValue placeholder="Select type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="text">Text</SelectItem>
            <SelectItem value="number">Number</SelectItem>
            <SelectItem value="dropdown-single">Dropdown Single</SelectItem>
            <SelectItem value="dropdown-multi">Dropdown Multi</SelectItem>
            <SelectItem value="radio">Radio</SelectItem>
            <SelectItem value="checkbox-single">Checkbox Single</SelectItem>
            <SelectItem value="checkbox-multi">Checkbox Multi</SelectItem>
            <SelectItem value="date">Date</SelectItem>
            <SelectItem value="text-area">Text Area</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Dynamic Fields */}
      <div className="space-y-2">
        {type === "text" && (
          <>
            <Label>Default Value (Text)</Label>
            <Input
              placeholder="Enter default text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </>
        )}

        {type === "text-area" && (
          <>
            <Label>Default Value (Text Area)</Label>
            <textarea
              className="w-full rounded-md border border-input px-3 py-2 text-sm shadow-sm focus:outline-none"
              placeholder="Enter default text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </>
        )}

        {type === "date" && (
          <>
            <Label>Default Date</Label>
            <Input
              type="date"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </>
        )}

        {(type === "dropdown-single" ||
          type === "dropdown-multi" ||
          type === "checkbox-multi" ||
          type === "radio") && (
          <div className="space-y-2">
            <Label>
              Field Options <span className="text-red-500">*</span>
            </Label>
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <SortableContext
                items={options.map((o) => o.id)}
                strategy={verticalListSortingStrategy}
              >
                <div className="space-y-2">
                  {options.map((opt) => (
                    <SortableOption
                      key={opt.id}
                      id={opt.id}
                      value={opt.value}
                      onChange={(val) => handleChange(val, opt.id)}
                      onRemove={() => handleRemove(opt.id)}
                    />
                  ))}
                </div>
              </SortableContext>
            </DndContext>
            <Button
              variant="ghost"
              size="sm"
              type="button"
              className="text-blue-600"
              onClick={handleAddOption}
            >
              + Add Option
            </Button>
            {error && (
              <p className="text-sm text-red-600 flex items-center gap-1">
                ⚠️ All Options Must Have A Non-Empty Name.
              </p>
            )}
          </div>
        )}

        {type === "checkbox-single" && (
          <div className="flex items-center gap-2">
            <Checkbox
              checked={value === "true"}
              onCheckedChange={(val) => setValue(val ? "true" : "false")}
            />
            <Label>Default Checked</Label>
          </div>
        )}

        {type === "number" && (
          <>
            <Label>Default Value (Number)</Label>
            <Input
              type="number"
              placeholder="Enter number"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </>
        )}
      </div>
    </div>
  );
}
