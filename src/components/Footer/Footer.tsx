import { Typography } from "@material-tailwind/react";
 
export function Footer() {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
      <div className="flex flex-col md:flex-row items-center md:items-center gap-y-2 md:gap-y-0 md:gap-x-6 "> {/* Add ml-auto class here */}
        <div style={{marginLeft:"20px"}}>
          <Typography color="blue-gray" className="font-normal">
           2023 &copy; Agence de développement du digital
          </Typography>
        </div>
      </div>
      <div className="ml-auto" style={{marginRight:"20px"}}>
          <Typography color="blue-gray" className="font-normal">
            Une solution proposée par la Digital Factory - ADD
          </Typography>
        </div>
    </footer>
  );
}
