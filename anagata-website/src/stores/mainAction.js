import axios from "axios";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";

const endpointAnagata = "https://content.anagatalaw.com/wp-json/wp/v2";

export const useFetchPosts = () => {
  return useQuery({
    queryKey: ["fetchPost"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${endpointAnagata}/posts?categories=3&status=publish`
      );
      return data;
    },
    refetchOnWindowFocus: false,
    retry: false,
  });
};

export const useFetchPostsDetails = (slug) => {
  return useQuery({
    queryKey: ["fetchPostDetail"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${endpointAnagata}/posts?status=publish&slug=${slug}`
      );
      return data;
    },
    refetchOnWindowFocus: false,
    retry: false,
  });
};
