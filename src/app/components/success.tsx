import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Enquiry Created Successfully !</DialogTitle>
          <DialogDescription>
            <Link href="https://trellingfashion.com">
              Check out @trellingfashion - Where luxury meets your budget.{" "}
            </Link>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button type="submit">
            Check out @trellingfashion - Where luxury meets your budget.
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
