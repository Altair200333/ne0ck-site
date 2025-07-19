import React, { useMemo, useState } from "react";
import Image from "next/image";
import { Stack, Text, Skeleton } from "@chakra-ui/react";

const IMAGE_SIZE = 350;

const IMAGE_VARIANTS = ["/assets/cat-sit-white.png", "/assets/cat-sit.png"];

const ComingSoon: React.FC = () => {
  const [isLoadingPlaceholder, setIsLoadingPlaceholder] = useState(true);

  const randomSrc = useMemo(
    () => IMAGE_VARIANTS[Math.floor(Math.random() * IMAGE_VARIANTS.length)],
    [],
  );

  return (
    <Stack>
      <Text fontSize="lg">
        This article is not written yet, but probably will be soon
      </Text>
      <Skeleton
        loading={isLoadingPlaceholder}
        w={IMAGE_SIZE}
        h={IMAGE_SIZE}
        borderRadius="12px"
        opacity={isLoadingPlaceholder ? 0.1 : 1}
      >
        <Image
          src={randomSrc}
          alt="Coming soon illustration"
          width={IMAGE_SIZE}
          height={IMAGE_SIZE}
          onLoadingComplete={() => setIsLoadingPlaceholder(false)}
        />
      </Skeleton>
    </Stack>
  );
};

export default ComingSoon;
