import {
  Palette,
  Shirt,
  Scissors,
  Truck,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function FeatureCard({
  title,
  description,
  icon,
}: FeatureCardProps) {
  const IconComponent = getIconComponent(icon);

  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
          <IconComponent className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

function getIconComponent(iconName: string): LucideIcon {
  switch (iconName) {
    case "Palette":
      return Palette;
    case "Shirt":
      return Shirt;
    case "Scissors":
      return Scissors;
    case "Truck":
      return Truck;
    case "User":
      return UserRound;
    default:
      return Palette;
  }
}
