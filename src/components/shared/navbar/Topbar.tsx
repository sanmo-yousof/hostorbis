import Container from "@/components/layout/Container";
import Logo from "../logo";
import Button from "@/components/ui/Button";

export default function Topbar() {
  return (
    <Container className="lg:flex hidden border-b border-border py-2 justify-between lg:px-6 items-center">
      <div className="w-1/2">
        <Logo />
      </div>
      <div className="w-1/2 flex justify-between  items-center">
        <div className="text-base font-medium flex ">
          <p className=" text-foreground-secondary pr-6 border-r border-border">Plans & Pricing</p>
          <p className=" text-primary pl-6">Special Offer click here</p>
        </div>
        <div className="flex  gap-3 ">
          <Button size="sm">Login</Button>
          <Button size="sm" variant="outline">Signup</Button>
        </div>
      </div>
    </Container>
  );
}
