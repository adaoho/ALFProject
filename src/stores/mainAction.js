import axios from "axios";
import { toast } from "sonner";
import { useMutation, useQuery } from "@tanstack/react-query";

const endpointAnagata = import.meta.env.VITE_ENDPOINT;
const endpointAnagataAdmin = import.meta.env.VITE_ENDPOINT_ADMIN;

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
    queryKey: ["fetchPostDetail", slug],
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

export const usePostEmail = () => {
  return useMutation({
    mutationFn: async (dataUser) => {
      try {
        const response = await axios.post(
          `${endpointAnagataAdmin}/admin-ajax.php?action=handle_contact_form_submission`,
          new URLSearchParams(dataUser).toString(),
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            withCredentials: true,
          }
        );
        return response.data;
      } catch (error) {
        throw error;
      }
    },
    retry: false,
    onError: (error) => {
      const errorMessage =
        error?.response?.data?.message || "Failed to send email";
      toast.error(errorMessage);
    },
  });
};

export const useFetchAllPost = (title, page = 1, limit = 18) => {
  return useQuery({
    queryKey: ["fetchAllPost", title, page, limit],
    queryFn: async () => {
      const response = await axios.get(
        `${endpointAnagata}/posts?status=publish&search=${title}&per_page=${limit}&page=${page}`
      );

      const totalPosts = response?.headers["x-wp-total"] || 0;
      const totalPages = response.headers["x-wp-totalpages"] || 1;

      return {
        posts: response?.data,
        totalPosts: Number(totalPosts),
        totalPages: Number(totalPages),
      };
    },
    refetchOnWindowFocus: false,
    retry: false,
  });
};

export const useFetchRandomPosts = (limit = 5) => {
  return useQuery({
    queryKey: ["fetchRandomPosts", limit],
    queryFn: async () => {
      const response = await axios.get(
        `${endpointAnagata}/posts?status=publish&orderby=rand&per_page=${limit}`
      );
      return response?.data || [];
    },
    refetchOnWindowFocus: false,
    retry: false,
  });
};

export const useFetchPageCoverPost = () => {
  return useQuery({
    queryKey: ["fetchPageCover"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${endpointAnagata}/posts?status=publish&categories=7`
      );
      return data;
    },
    refetchOnWindowFocus: false,
    retry: false,
  });
};

export const useSearchByTitle = (title) => {
  return useQuery({
    queryKey: ["fetchAllPost", title],
    queryFn: async () => {
      const { data } = await axios.get(
        `${endpointAnagata}/posts?status=publish&search=${title}`
      );
      return data;
    },
    enabled: Boolean(title),
    refetchOnWindowFocus: false,
    retry: false,
  });
};
