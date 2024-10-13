type ArabicContent = {
  content: string;
};

export type ICar = {
  id: number;
  car_text_section: Array<{
    title: string;
    content: string;
  }>;
  parsed_car_text_section?: Array<{
    content: string;
    title?: string;
  }>;

  car_video: Array<any>;
  parsed_car_video?: Array<any>;
  car_image?: Array<{
    image: string;
  }>;
  parsed_car_image?: Array<{
    image: string;
  }>;
  auction?: IAuction;
  title: string;
  short_description: string;
  car_text_section_arabic: ArabicContent;
  brand: string;
  model: string;
  mileage: number;
  mileage_type: string;
  vin: string;
  location: string;
  engine: string;
  drivetrain: string;
  transmission: string;
  registration_status: string;
  body_style: string;
  exterior_color: string;
  interior_color: string;
  market_value: string;
  inspection_report_link: string | null;
  history_report_link: string | null;
  arabic_description_link: string | null;
  currency: string;
  main_image: string;
  temp_url: string | null;
  year: number;
  description: string;
  sale_price: number;
  buyers_fee: string;
  verified: boolean;
  status:
    | "created"
    | "live"
    | "for_sale"
    | "sold"
    | "unverified"
    | "deactivate";
  category: string;
  country: string;
  url_route: string | null;
  seller: number;
};

export type IAuction = {
  id: number;
  number_of_bids: number;
  time_ending: string;
  latest_bid: number;
};

export type TSearchParams = {
  searchParams: { [key: string]: string | string[] | undefined };
};
